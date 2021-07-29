package com.paybill.service;

import com.paybill.entity.Ledger;
import com.paybill.entity.Result;

public interface PayBillService {

	Result postPayBill(final Ledger ledger);

	Result getPayBill(final int empId, final String date);

	Result downloadPayBill(final Ledger ledger);
}
