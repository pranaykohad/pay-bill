package com.paybill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.paybill.entity.Ledger;
import com.paybill.entity.Result;
import com.paybill.service.PayBillService;

@RestController
@RequestMapping("/api/paybill")
@CrossOrigin("http://localhost:4200")
public class PayBillController {

	@Autowired
	private PayBillService payBillService;

	@PostMapping()
	public Result savePayBill(@RequestBody final Ledger ledger) {
		return payBillService.postPayBill(ledger);
	}

	@GetMapping()
	public Result getPayBill(@RequestParam final int empId, @RequestParam final String date) {
		return payBillService.getPayBill(empId, date);
	}

}
