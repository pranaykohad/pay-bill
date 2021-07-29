package com.paybill.application;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.annotation.PostConstruct;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.core.env.Environment;
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

	static final StringBuilder info = new StringBuilder();

	private static final Logger LOGGER = LoggerFactory.getLogger("Application.class");

	final Environment environment;

	public Application(final Environment environment) {
		this.environment = environment;

	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		LOGGER.info("{}", info);
	}

	@PostConstruct
	public void init() {
		try {
			final String hostAddress = InetAddress.getLocalHost().getHostAddress();
			final String hostName = InetAddress.getLocalHost().getHostName();
			final String port = environment.getProperty("server.port");
			info.append("\n");
			info.append("----------------------------------------------\n");
			info.append("Solid Bills is started on\n");
			info.append("http://" + hostAddress + ":" + port + "\n");
			info.append("http://" + hostName + ":" + port + "\n");
			info.append("----------------------------------------------" + "\n");
		} catch (UnknownHostException e) {
			System.out.println("ERROR WIHILE RUNNING SOLID BILLS, PLEASE CONTACT ADMINISTRATOR");
			LOGGER.info("ERROR WIHILE RUNNING SOLID BILLS, PLEASE CONTACT ADMINISTRATOR");
		}
		final Result result = settingService.getSetting();
		if (result.getStatus().equals(ResStatus.FAILURE)) {
			final Setting setting = new Setting();
			setting.setDaAllowancePer(17L);
			setting.setDaOnTrAllowancePer(17L);
			setting.setSpclAllowancePer(10L);
			settingService.saveSetting(setting);
		}
	}

}
