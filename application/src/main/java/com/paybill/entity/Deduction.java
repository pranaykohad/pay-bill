package com.paybill.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Deduction {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int deductionId;
	private Long cpfSubs;
	private Long cpfArrears;
	private Long cpfAdvance;
	private String noOfInstall;
	private Long gslis;
	private Long npsMgmtShare;
	private Long npsOwnShare;
	private Long npsMgmtShareArrears;
	private Long npsOsArrears;
	private Long incomeTax;
	private Long professionalTax;
	private Long waterElectricCharges;
	private Long otherDeduction1;
	private Long otherDeduction2;
	private Long totalDeduction;

	public int getDeductionId() {
		return deductionId;
	}

	public void setDeductionId(int deductionId) {
		this.deductionId = deductionId;
	}

	public Long getCpfSubs() {
		return cpfSubs;
	}

	public void setCpfSubs(Long cpfSubs) {
		this.cpfSubs = cpfSubs;
	}

	public Long getCpfArrears() {
		return cpfArrears;
	}

	public void setCpfArrears(Long cpfArrears) {
		this.cpfArrears = cpfArrears;
	}

	public Long getCpfAdvance() {
		return cpfAdvance;
	}

	public void setCpfAdvance(Long cpfAdvance) {
		this.cpfAdvance = cpfAdvance;
	}

	public String getNoOfInstall() {
		return noOfInstall;
	}

	public void setNoOfInstall(String noOfInstall) {
		this.noOfInstall = noOfInstall;
	}

	public Long getGslis() {
		return gslis;
	}

	public void setGslis(Long gslis) {
		this.gslis = gslis;
	}

	public Long getNpsMgmtShare() {
		return npsMgmtShare;
	}

	public void setNpsMgmtShare(Long npsMgmtShare) {
		this.npsMgmtShare = npsMgmtShare;
	}

	public Long getNpsOwnShare() {
		return npsOwnShare;
	}

	public void setNpsOwnShare(Long npsOwnShare) {
		this.npsOwnShare = npsOwnShare;
	}

	public Long getNpsMgmtShareArrears() {
		return npsMgmtShareArrears;
	}

	public void setNpsMgmtShareArrears(Long npsMgmtShareArrears) {
		this.npsMgmtShareArrears = npsMgmtShareArrears;
	}

	public Long getNpsOsArrears() {
		return npsOsArrears;
	}

	public void setNpsOsArrears(Long npsOsArrears) {
		this.npsOsArrears = npsOsArrears;
	}

	public Long getIncomeTax() {
		return incomeTax;
	}

	public void setIncomeTax(Long incomeTax) {
		this.incomeTax = incomeTax;
	}

	public Long getProfessionalTax() {
		return professionalTax;
	}

	public void setProfessionalTax(Long professionalTax) {
		this.professionalTax = professionalTax;
	}

	public Long getWaterElectricCharges() {
		return waterElectricCharges;
	}

	public void setWaterElectricCharges(Long waterElectricCharges) {
		this.waterElectricCharges = waterElectricCharges;
	}

	public Long getOtherDeduction1() {
		return otherDeduction1;
	}

	public void setOtherDeduction1(Long otherDeduction1) {
		this.otherDeduction1 = otherDeduction1;
	}

	public Long getOtherDeduction2() {
		return otherDeduction2;
	}

	public void setOtherDeduction2(Long otherDeduction2) {
		this.otherDeduction2 = otherDeduction2;
	}

	public Long getTotalDeduction() {
		return totalDeduction;
	}

	public void setTotalDeduction(Long totalDeduction) {
		this.totalDeduction = totalDeduction;
	}

}
