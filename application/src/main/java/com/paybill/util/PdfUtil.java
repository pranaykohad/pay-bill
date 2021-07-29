package com.paybill.util;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.Month;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.PageSize;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;
import com.paybill.entity.Allowance;
import com.paybill.entity.Deduction;
import com.paybill.entity.Employee;
import com.paybill.entity.Ledger;

@Component
public class PdfUtil {

	private static final Logger LOG = LoggerFactory.getLogger("PdfUtil.class");

	public String createFileName(final Employee employee) {
		return employee.getPrefix() + " " + employee.getShortName() + "(" + LocalDate.now() + ")" + ".pdf";
	}

	public byte[] readFile(final String fileName) {
		byte[] inFileBytes = null;
		try {
			inFileBytes = Files.readAllBytes(Paths.get(fileName));
		} catch (IOException e) {
			LOG.error("Error while reading PDF", e);
		} finally {
			try {
				Files.deleteIfExists(Paths.get(fileName));
			} catch (IOException e) {
				LOG.error("Error while deleting PDF", e);
			}
		}
		return inFileBytes;
	}

	public void buildPayBillPDF(final String fileName, final Ledger ledger) {
		Document document = new Document(PageSize.A4);
		try {
			final Font font = createPDFFile(fileName, document);
			addHeader(document, font, ledger);

			final PdfPTable table = new PdfPTable(2);
			addPayBillHeader(table);
			addEmployeeDetail(document, ledger.getEmployee());
			addAllocationsAndDeductions(table, ledger);
			addFinalGrossAndDeductions(table, ledger);
			addNetAmount(ledger, table);
			document.add(new Paragraph(" "));
			document.add(table);
			document.add(new Paragraph(" "));
			document.add(new Paragraph("NOTE:"));
			document.add(
					new Paragraph("Dearness Allowance = " + ledger.getDaAllowancePer() + "% of Pay in Pay Martix"));
			document.add(
					new Paragraph("Special Allowance  = " + ledger.getSpclAllowancePer() + "% of Pay in Pay Martix"));
			document.add(
					new Paragraph("D.A on T.R.        = " + ledger.getDaOnTrAllowancePer() + "% of Travel Allowance"));
			addPayBillFooter(document);
			document.close();
		} catch (DocumentException | IOException e) {
			LOG.error("Error while creating PDF", e);
		}
	}

	private Font createPDFFile(final String fileName, Document document)
			throws DocumentException, FileNotFoundException {
		PdfWriter.getInstance(document, new FileOutputStream(fileName));
		document.open();
		Font font = FontFactory.getFont(FontFactory.COURIER);
		font.setSize(18);
		return font;
	}

	private void addEmployeeDetail(Document document, Employee employee) throws DocumentException {
		final PdfPTable empTable = new PdfPTable(2);
		float[] columnWidths = new float[] { 100f, 100f };
		empTable.setWidths(columnWidths);
		
		empTable.addCell("Employee Name");
		empTable.addCell(employee.getShortName());
		empTable.addCell("Staff Code");
		
		empTable.addCell(employee.getStaffCode());

		empTable.addCell("Designation");
		empTable.addCell(employee.getDesignation());

		document.add(empTable);
		document.add(new Paragraph(" "));
	}

	private void addHeader(final Document document, final Font font, final Ledger ledger) throws DocumentException {
		Paragraph para = new Paragraph("Jawahar Navodaya Vidyalaya, Amravati", font);
		para.setAlignment(Element.ALIGN_CENTER);
		font.setSize(14);
		document.add(para);
		LocalDate currentDate = convertDate(ledger);
		Month month = currentDate.getMonth();
		int year = currentDate.getYear();
		para = new Paragraph("Pay Bill for " + month + " " + year, font);
		para.setAlignment(Element.ALIGN_CENTER);
		document.add(para);
		document.add(new Paragraph(" "));
	}

	private LocalDate convertDate(final Ledger ledger) {
		String date = ledger.getDate();
		date = date.replace("/", "-");
		date += "-01";
		return LocalDate.parse(date);
	}

	private void addPayBillHeader(final PdfPTable table) {
		Stream.of("Allowances", "Deductions").forEach(columnTitle -> {
			final PdfPCell header = new PdfPCell();
			header.setBackgroundColor(BaseColor.LIGHT_GRAY);
			header.setBorderWidth(2);
			header.setHorizontalAlignment(Element.ALIGN_CENTER);
			header.setPhrase(new Phrase(columnTitle));
			table.addCell(header);
		});
	}

	private void addAllocationsAndDeductions(final PdfPTable table, final Ledger ledger) throws DocumentException {
		buildAllocationTable(ledger.getAllowance(), table);
		buildDeductionTable(ledger.getDeduction(), table);
	}

	private void buildAllocationTable(final Allowance allowance, final PdfPTable table) throws DocumentException {
		final PdfPTable allowationTable = new PdfPTable(2);
		float[] columnWidths = new float[] { 100f, 30f };
		allowationTable.setWidths(columnWidths);

		allowationTable.addCell("Pay in Pay Martix");
		allowationTable.addCell(buildCell(allowance.getPayInPayMatrix().toString()));

		allowationTable.addCell("Dearness Allowance");
		allowationTable.addCell(buildCell(allowance.getDearnessAllow().toString()));

		allowationTable.addCell("Special Allowance");
		allowationTable.addCell(buildCell(allowance.getSpecialAllow().toString()));

		allowationTable.addCell("HRA");
		allowationTable.addCell(buildCell(allowance.getHra().toString()));

		allowationTable.addCell("Travel Allowance");
		allowationTable.addCell(buildCell(allowance.getTravelAllow().toString()));

		allowationTable.addCell("D.A on T.R.");
		allowationTable.addCell(buildCell(allowance.getDaOnTravelAllow().toString()));

		allowationTable.addCell("House Master Allowance");
		allowationTable.addCell(buildCell(allowance.getHouseMasterAllow().toString()));

		allowationTable.addCell("Cash handling Allowance");
		allowationTable.addCell(buildCell(allowance.getCashHandlingAllow().toString()));

		allowationTable.addCell("NPS(Mgmt. Share) 10%");
		allowationTable.addCell(buildCell(allowance.getNpsMgmtShare().toString()));

		allowationTable.addCell("Other Allowances");
		allowationTable.addCell(buildCell(allowance.getOtherAllowance().toString()));

		table.addCell(allowationTable);
	}

	private void buildDeductionTable(final Deduction deduction, final PdfPTable table) throws DocumentException {
		final PdfPTable deductionTable = new PdfPTable(2);
		float[] columnWidths = new float[] { 100f, 30f };
		deductionTable.setWidths(columnWidths);

		deductionTable.addCell("CPF Subscription");
		deductionTable.addCell(buildCell(deduction.getCpfSubs().toString()));

		deductionTable.addCell("CPF Arrears");
		deductionTable.addCell(buildCell(deduction.getCpfArrears().toString()));

		deductionTable.addCell("CPF Advance");
		deductionTable.addCell(buildCell(deduction.getCpfAdvance().toString()));

		deductionTable.addCell("Number of Installment");
		deductionTable.addCell(buildCell(deduction.getNoOfInstall()));

		deductionTable.addCell("GSLIS");
		deductionTable.addCell(buildCell(deduction.getGslis().toString()));

		deductionTable.addCell("NPS(Mgmt. Share)");
		deductionTable.addCell(buildCell(deduction.getNpsMgmtShare().toString()));

		deductionTable.addCell("NPS(Own Share)");
		deductionTable.addCell(buildCell(deduction.getNpsOwnShare().toString()));

		deductionTable.addCell("NPS(Mgmt. Share) Arrears");
		deductionTable.addCell(buildCell(deduction.getNpsMgmtShareArrears().toString()));

		deductionTable.addCell("NPS(Own Share) Arrears");
		deductionTable.addCell(buildCell(deduction.getNpsOsArrears().toString()));

		deductionTable.addCell("Income Tax");
		deductionTable.addCell(buildCell(deduction.getIncomeTax().toString()));

		deductionTable.addCell("Professional Tax");
		deductionTable.addCell(buildCell(deduction.getProfessionalTax().toString()));

		deductionTable.addCell("Water and Electric Charges");
		deductionTable.addCell(buildCell(deduction.getWaterElectricCharges().toString()));

		deductionTable.addCell("Other Deduction1");
		deductionTable.addCell(buildCell(deduction.getOtherDeduction1().toString()));

		deductionTable.addCell("Other Deduction2");
		deductionTable.addCell(buildCell(deduction.getOtherDeduction2().toString()));

		table.addCell(deductionTable);
	}

	private void addFinalGrossAndDeductions(final PdfPTable table, final Ledger ledger) throws DocumentException {
		final PdfPTable grossTable = new PdfPTable(2);
		grossTable.getDefaultCell().setBorder(Rectangle.NO_BORDER);
		float[] columnWidths = new float[] { 100f, 100f };
		grossTable.setWidths(columnWidths);

		grossTable.addCell("Gross Total");
		grossTable.addCell(buildCellTotal("Rs. " + ledger.getAllowance().getGrossTotal().toString()));

		final PdfPTable deductionTable = new PdfPTable(2);
		deductionTable.getDefaultCell().setBorder(Rectangle.NO_BORDER);
		deductionTable.setWidths(columnWidths);

		deductionTable.addCell("Total Deduction");
		deductionTable.addCell(buildCellTotal("Rs. " + ledger.getDeduction().getTotalDeduction().toString()));

		table.addCell(grossTable);
		table.addCell(deductionTable);
	}

	private void addPayBillFooter(Document document) throws DocumentException {
		document.add(Chunk.NEWLINE);
		document.add(Chunk.NEWLINE);
		document.add(Chunk.NEWLINE);
		document.add(Chunk.NEWLINE);
		document.add(Chunk.NEWLINE);
		document.add(new Paragraph(
				"--------------------------------------------------------------------------------------------------------------------------------"));
		document.add(new Paragraph("This is computer generated slip, no signature required."));
	}

	private PdfPCell buildCell(final String text) {
		PdfPCell cell = new PdfPCell(new Phrase(text));
		cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
		cell.setBorder(Rectangle.BOTTOM);
		cell.setFixedHeight(25);
		return cell;
	}

	private PdfPCell buildCellTotal(final String text) {
		PdfPCell cell = new PdfPCell(new Phrase(text));
		cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
		cell.setBorder(Rectangle.NO_BORDER);
		return cell;
	}

	private void addNetAmount(final Ledger ledger, final PdfPTable table) {
		table.addCell("Net Amount");
		PdfPCell cell = new PdfPCell(new Phrase("Rs. " + ledger.getNetAmount().toString()));
		cell.setHorizontalAlignment(Element.ALIGN_RIGHT);
		table.addCell(cell);
	}

}
