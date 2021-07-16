package com.paybill.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Setting {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int settingId;
	private Long daAllowancePer;
	private Long spclAllowancePer;
	private Long daOnTrAllowancePer;

	public int getSettingId() {
		return settingId;
	}

	public void setSettingId(int settingId) {
		this.settingId = settingId;
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
