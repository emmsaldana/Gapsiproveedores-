package com.gapsi.providers.service;

import com.gapsi.providers.models.Proveedor;
import com.gapsi.providers.repository.ProveedorRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.io.File;
import java.io.IOException;
import java.util.Comparator;
import java.util.List;

@Service
public class ProveedorService {

    private final ProveedorRepository proveedorRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();
    private static final String FILE_PATH = "src/main/resources/proveedores.json";

    @Autowired
    public ProveedorService(ProveedorRepository proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }

    @PostConstruct
    public void init() {
        loadProveedores();
    }

    public List<Proveedor> getAllProveedores() {
        return proveedorRepository.getAllProveedores();
    }

    public Proveedor getProveedor(int id) {
        return proveedorRepository.getProveedor(id);
    }

    public ResponseEntity<String> addProveedor(Proveedor proveedor) {
        if (proveedor.getNombre() == null || proveedor.getNombre().isEmpty()) {
            return ResponseEntity.badRequest().body("El nombre del proveedor no puede estar vacío");
        }

        List<Proveedor> proveedores = proveedorRepository.getAllProveedores();
        boolean nombreExistente = proveedores.stream()
                .anyMatch(p -> p.getNombre() != null && p.getNombre().equalsIgnoreCase(proveedor.getNombre()));
        if (nombreExistente) {
            return ResponseEntity.badRequest().body("El proveedor ya existe");
        } else {
            proveedor.setId_proveedor(getNextId());
            proveedorRepository.addProveedor(proveedor);
            saveProveedores();
            return ResponseEntity.ok("Proveedor agregado exitosamente");
        }
    }

    public Proveedor updateProveedor(int id, Proveedor proveedor) {
        Proveedor updatedProveedor = proveedorRepository.updateProveedor(id, proveedor);
        saveProveedores();
        return updatedProveedor;
    }

    public void deleteProveedor(int id) {
        proveedorRepository.deleteProveedor(id);
        saveProveedores();
    }

    private void saveProveedores() {
        try {
            List<Proveedor> proveedores = proveedorRepository.getAllProveedores();
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(new File(FILE_PATH), proveedores);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void loadProveedores() {
        try {
            File file = new File(FILE_PATH);
            if (file.exists()) {
                List<Proveedor> proveedores = objectMapper.readValue(file, new TypeReference<List<Proveedor>>() {});
                proveedores.forEach(proveedorRepository::addProveedor);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public int getNextId() {
        List<Proveedor> proveedores = proveedorRepository.getAllProveedores();
        return proveedores.stream()
                .max(Comparator.comparingInt(Proveedor::getId_proveedor))
                .map(proveedor -> proveedor.getId_proveedor() + 1)
                .orElse(1);
    }
}
