package com.example.employeemanagement.service;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository repo;

    public EmployeeService(EmployeeRepository repo) {
        this.repo = repo;
    }

    public List<Employee> getAll() {
        return repo.findAll();
    }

    public Optional<Employee> getById(Long id) {
        return repo.findById(id);
    }

    public Employee create(Employee e) {
        e.setId(null);
        return repo.save(e);
    }

    public Employee update(Long id, Employee updated) {
        return repo.findById(id).map(e -> {
            e.setFirstName(updated.getFirstName());
            e.setLastName(updated.getLastName());
            e.setEmail(updated.getEmail());
            e.setDepartment(updated.getDepartment());
            e.setSalary(updated.getSalary());
            return repo.save(e);
        }).orElseThrow(() -> new RuntimeException("Employee not found: " + id));
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
