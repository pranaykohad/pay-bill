package com.paybill.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int empId;
	private String firstName;
	private String lastName;
	private String shortName;
	private String prefix;
	private String staffCode;
	private String designation;
	private Long level;
	private String pentionScheme;
	private Long noOfPostSanctioned;
	private Long staffInPosition;
	private String role;
	private String empType;

	@OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Ledger> ledgerList;

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getStaffCode() {
		return staffCode;
	}

	public void setStaffCode(String staffCode) {
		this.staffCode = staffCode;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public Long getLevel() {
		return level;
	}

	public void setLevel(Long level) {
		this.level = level;
	}

	public String getPentionScheme() {
		return pentionScheme;
	}

	public void setPentionScheme(String pentionScheme) {
		this.pentionScheme = pentionScheme;
	}

	public Long getNoOfPostSanctioned() {
		return noOfPostSanctioned;
	}

	public void setNoOfPostSanctioned(Long noOfPostSanctioned) {
		this.noOfPostSanctioned = noOfPostSanctioned;
	}

	public Long getStaffInPosition() {
		return staffInPosition;
	}

	public void setStaffInPosition(Long staffInPosition) {
		this.staffInPosition = staffInPosition;
	}

	public List<Ledger> getLedgerList() {
		return ledgerList;
	}

	public void setLedgerList(List<Ledger> ledgerList) {
		this.ledgerList = ledgerList;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getEmpType() {
		return empType;
	}

	public void setEmpType(String empType) {
		this.empType = empType;
	}

}
