package com.paybill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.paybill.entity.Ledger;

@Repository
public interface PayBillRepository extends JpaRepository<Ledger, Integer> {

	@Query(value = "SELECT * FROM LEDGER L WHERE L.EMPLOYEE_EMP_ID = ?1 AND L.DATE = ?2", nativeQuery = true)
	Ledger getPayBillByEmpIdAndDate(final int empid, final String date);

//	@Modifying
//	@Query("DELETE FROM LEDGER L WHERE L.EMPLOYEE_EMP_ID = 1")
//	void deleteLedgerByEmpId(final int empId);

}
