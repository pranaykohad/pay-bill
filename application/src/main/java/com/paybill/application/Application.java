package com.paybill.application;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.paybill.entity.Result;
import com.paybill.entity.Result.ResStatus;
import com.paybill.entity.Setting;
import com.paybill.service.SettingService;

@SpringBootApplication(scanBasePackages = "com.paybill")
@EntityScan("com.paybill.entity")
@EnableJpaRepositories("com.paybill.repository")
public class Application {
	
	@Autowired
	private SettingService settingService;

	private static final Logger LOGGER = LoggerFactory.getLogger("Application.class");

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		LOGGER.info("Pay Bill Application starts...");
	}
	
	@PostConstruct
	public void init() {
		final Result result = settingService.getSetting();
		if(result.getStatus().equals(ResStatus.FAILURE)) {
			final Setting setting = new Setting();
			setting.setDaAllowancePer(17L);
			setting.setDaOnTrAllowancePer(17L);
			setting.setSpclAllowancePer(10L);
			settingService.saveSetting(setting);
		}
	}

}
