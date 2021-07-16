package com.paybill.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paybill.entity.Employee;
import com.paybill.entity.Result;
import com.paybill.service.EmpService;

@RestController
@RequestMapping("/api/emp")
@CrossOrigin("http://localhost:4200")
public class EmployeeController {
	
	@Autowired
	private EmpService empService;
	
	@GetMapping("/{empId}")
	public Result getEmployee(@PathVariable final int empId) {
		return empService.getEmployee(empId);
	}
	
	@GetMapping("/all")
	public Result getAllEmp() {
		return empService.getAllEmp();
	}
	
	@PostMapping()
	public Result saveEmployee(@RequestBody final Employee emp) {
		return empService.postEmployee(emp);
	}

}
