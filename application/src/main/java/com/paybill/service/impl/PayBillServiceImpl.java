package com.paybill.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.paybill.entity.Attachment;
import com.paybill.entity.Ledger;
import com.paybill.entity.Result;
import com.paybill.entity.Result.ResStatus;
import com.paybill.repository.PayBillRepository;
import com.paybill.service.PayBillService;
import com.paybill.util.PdfUtil;

@Service
public class PayBillServiceImpl implements PayBillService {

	@Autowired
	private PayBillRepository payBillRepository;

	@Autowired
	private PdfUtil pdfUtil;

	@Override
	@Transactional
	public Result postPayBill(final Ledger ledger) {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final Ledger save = payBillRepository.save(ledger);
		if (save.getLedgerId() > 0) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(save);
		}
		return result;
	}

	@Override
	public Result getPayBill(final int empId, final String date) {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final Ledger save = payBillRepository.getPayBillByEmpIdAndDate(empId, date);
		if (save != null) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(save);
		}
		return result;
	}

	@Override
	public Result downloadPayBill(final Ledger ledger) {
		final Result result = new Result();
		final String fileName = pdfUtil.createFileName(ledger.getEmployee());
		pdfUtil.buildPayBillPDF(fileName, ledger);
		final byte[] byteConent = pdfUtil.readFile(fileName);
		final Attachment attachment = new Attachment();
		attachment.setFileContent(byteConent);
		attachment.setFilename(fileName);
		attachment.setMimeType("application/pdf");
		result.setData(attachment);
		return result;
	}

}
