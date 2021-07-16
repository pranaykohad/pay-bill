package com.paybill.entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Allowance {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int allowanceId;
	private Long payInPayMatrix;
	private Long dearnessAllow;
	private Long specialAllow;
	private Long hra;
	private Long travelAllow;
	private Long daOnTravelAllow;
	private Long houseMasterAllow;
	private Long cashHandlingAllow;
	private Long npsMgmtShare;
	private Long otherAllowance;
	private Long grossTotal;

	@OneToOne(mappedBy = "allowance", cascade = CascadeType.ALL)
	@JsonIgnore
	private Ledger ledger;

	public int getAllowanceId() {
		return allowanceId;
	}

	public void setAllowanceId(int allowanceId) {
		this.allowanceId = allowanceId;
	}

	public Long getPayInPayMatrix() {
		return payInPayMatrix;
	}

	public void setPayInPayMatrix(Long payInPayMatrix) {
		this.payInPayMatrix = payInPayMatrix;
	}

	public Long getDearnessAllow() {
		return dearnessAllow;
	}

	public void setDearnessAllow(Long dearnessAllow) {
		this.dearnessAllow = dearnessAllow;
	}

	public Long getSpecialAllow() {
		return specialAllow;
	}

	public void setSpecialAllow(Long specialAllow) {
		this.specialAllow = specialAllow;
	}

	public Long getHra() {
		return hra;
	}

	public void setHra(Long hra) {
		this.hra = hra;
	}

	public Long getTravelAllow() {
		return travelAllow;
	}

	public void setTravelAllow(Long travelAllow) {
		this.travelAllow = travelAllow;
	}

	public Long getDaOnTravelAllow() {
		return daOnTravelAllow;
	}

	public void setDaOnTravelAllow(Long daOnTravelAllow) {
		this.daOnTravelAllow = daOnTravelAllow;
	}

	public Long getHouseMasterAllow() {
		return houseMasterAllow;
	}

	public void setHouseMasterAllow(Long houseMasterAllow) {
		this.houseMasterAllow = houseMasterAllow;
	}

	public Long getCashHandlingAllow() {
		return cashHandlingAllow;
	}

	public void setCashHandlingAllow(Long cashHandlingAllow) {
		this.cashHandlingAllow = cashHandlingAllow;
	}

	public Long getNpsMgmtShare() {
		return npsMgmtShare;
	}

	public void setNpsMgmtShare(Long npsMgmtShare) {
		this.npsMgmtShare = npsMgmtShare;
	}

	public Long getOtherAllowance() {
		return otherAllowance;
	}

	public void setOtherAllowance(Long otherAllowance) {
		this.otherAllowance = otherAllowance;
	}

	public Long getGrossTotal() {
		return grossTotal;
	}

	public void setGrossTotal(Long grossTotal) {
		this.grossTotal = grossTotal;
	}

	public Ledger getLedger() {
		return ledger;
	}

	public void setLedger(Ledger ledger) {
		this.ledger = ledger;
	}

}
