package com.paybill.service;

import com.paybill.entity.Employee;
import com.paybill.entity.Result;

public interface EmpService {
	
	Result getEmployee(final int empId);
	Result getAllEmp();
	Result postEmployee(final Employee emp);
}
