package com.paybill.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.paybill.entity.Employee;
import com.paybill.entity.Result;
import com.paybill.entity.Result.ResStatus;
import com.paybill.repository.EmployeeRepository;
import com.paybill.service.EmpService;

@Service
public class EmpServiceImpl implements EmpService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Override
	public Result getEmployee(int empId) {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final Optional<Employee> save = employeeRepository.findById(empId);
		if (save.isPresent()) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(save);
		}
		return result;
	}

	@Override
	public Result getAllEmp() {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final List<Employee> findAll = employeeRepository.findAll();
		if (!findAll.isEmpty()) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(findAll);
		}
		return result;
	}

	@Override
	public Result postEmployee(final Employee emp) {
		final Result result = new Result();
		result.setStatus(ResStatus.FAILURE);
		final Employee save = employeeRepository.save(emp);
		if (save.getEmpId() > 0) {
			result.setStatus(ResStatus.SUCCESS);
			result.setData(save);
		}
		return result;
	}

	@Override
	public Result deleteEmployee(final Employee emp) {
		final Result result = new Result();
		result.setStatus(ResStatus.SUCCESS);
		try {
			employeeRepository.deleteById(Integer.parseInt(Integer.toString(emp.getEmpId())));
		} catch (Exception e) {
			result.setStatus(ResStatus.FAILURE);
		}
		return result;
	}

}
