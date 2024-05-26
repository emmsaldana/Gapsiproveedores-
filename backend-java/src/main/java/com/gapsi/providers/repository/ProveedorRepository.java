package com.gapsi.providers.repository;

import com.gapsi.providers.models.Proveedor;
import com.gapsi.providers.service.impl.ProveedorValidationRule;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Repository
public class ProveedorRepository {

    private final List<Proveedor> proveedores = new ArrayList<>();
    private final Set<ProveedorValidationRule> validationRules;

    public ProveedorRepository(Set<ProveedorValidationRule> validationRules) {
        this.validationRules = validationRules;
    }

    public List<Proveedor> getAllProveedores() {
        return proveedores;
    }

    public Proveedor getProveedor(int id) {
        return proveedores.stream()
                .filter(p -> p.getId_proveedor() == id)
                .findFirst()
                .orElse(null);
    }

    public void addProveedor(Proveedor proveedor) {
        boolean isValid = validationRules.stream().allMatch(rule -> rule.validate(proveedor));
        if (isValid) {
            proveedores.add(proveedor);
        }
    }

    public Proveedor updateProveedor(int id, Proveedor proveedor) {
        int index = proveedores.indexOf(getProveedor(id));
        if (index >= 0) {
            proveedores.set(index, proveedor);
        }
        return proveedor;
    }

    public void deleteProveedor(int id) {
        proveedores.removeIf(p -> p.getId_proveedor() == id);
    }
}
