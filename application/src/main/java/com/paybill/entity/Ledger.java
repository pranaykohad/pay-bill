package com.paybill.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

@Entity
public class Ledger {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ledgerId;
	private String date;
	private Long noOfDays;
	private Long netAmount;

	private Long daAllowancePer;
	private Long spclAllowancePer;
	private Long daOnTrAllowancePer;

	@OneToOne(cascade = CascadeType.ALL)
	private Allowance allowance;

	@OneToOne(cascade = CascadeType.ALL)
	private Deduction deduction;

	@ManyToOne
	private Employee employee;

	public int getLedgerId() {
		return ledgerId;
	}

	public void setLedgerId(int ledgerId) {
		this.ledgerId = ledgerId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Long getNoOfDays() {
		return noOfDays;
	}

	public void setNoOfDays(Long noOfDays) {
		this.noOfDays = noOfDays;
	}

	public Long getNetAmount() {
		return netAmount;
	}

	public void setNetAmount(Long netAmount) {
		this.netAmount = netAmount;
	}

	public Allowance getAllowance() {
		return allowance;
	}

	public void setAllowance(Allowance allowance) {
		this.allowance = allowance;
	}

	public Deduction getDeduction() {
		return deduction;
	}

	public void setDeduction(Deduction deduction) {
		this.deduction = deduction;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Long getDaAllowancePer() {
		return daAllowancePer;
	}

	public void setDaAllowancePer(Long daAllowancePer) {
		this.daAllowancePer = daAllowancePer;
	}

	public Long getSpclAllowancePer() {
		return spclAllowancePer;
	}

	public void setSpclAllowancePer(Long spclAllowancePer) {
		this.spclAllowancePer = spclAllowancePer;
	}

	public Long getDaOnTrAllowancePer() {
		return daOnTrAllowancePer;
	}

	public void setDaOnTrAllowancePer(Long daOnTrAllowancePer) {
		this.daOnTrAllowancePer = daOnTrAllowancePer;
	}

}
