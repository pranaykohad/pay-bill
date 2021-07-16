package com.paybill.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paybill.entity.Result;
import com.paybill.entity.Result.ResStatus;
import com.paybill.entity.Setting;
import com.paybill.repository.SettingRepository;
import com.paybill.service.SettingService;

@Service
public class SettingServiceImpl implements SettingService {

	@Autowired
	private SettingRepository settingRepository;

	@Override
	public Result getSetting() {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final List<Setting> findAll = settingRepository.findAll();
		if (!findAll.isEmpty()) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(findAll.get(0));
		}
		return result;
	}

	@Override
	public Result saveSetting(final Setting setting) {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final Setting save = settingRepository.save(setting);
		if (save.getSettingId() > 0) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(save);
		}
		return result;
	}

}
