package com.paybill.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paybill.entity.Setting;

@Repository
public interface SettingRepository extends JpaRepository<Setting, Integer>{

}
