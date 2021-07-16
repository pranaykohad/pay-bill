package com.paybill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paybill.entity.Result;
import com.paybill.entity.Setting;
import com.paybill.service.SettingService;

@RestController
@RequestMapping("/api/setting")
@CrossOrigin("http://localhost:4200")
public class SettingController {
	
	@Autowired
	private SettingService settingService;
	
	@GetMapping()
	public Result getSetting() {
		return settingService.getSetting();
	}
	
	@PostMapping()
	public Result saveSetting(@RequestBody final Setting setting) {
		return settingService.saveSetting(setting);
	}

}
