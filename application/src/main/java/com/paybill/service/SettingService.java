package com.paybill.service;

import com.paybill.entity.Result;
import com.paybill.entity.Setting;

public interface SettingService {
	
	Result getSetting();
	Result saveSetting(final Setting setting);
}
