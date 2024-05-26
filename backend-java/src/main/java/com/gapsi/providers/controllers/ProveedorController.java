package com.gapsi.providers.controllers;

import com.gapsi.providers.models.Proveedor;
import com.gapsi.providers.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;

    //Para obtener todos los proveedores
    @GetMapping
    public ResponseEntity<List<Proveedor>> getAllProveedores() {
        return ResponseEntity.ok(proveedorService.getAllProveedores());
    }

    //Para obtener un solo proveedor
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> getProveedor(@PathVariable int id) {
        Proveedor proveedor = proveedorService.getProveedor(id);
        if (proveedor != null) {
            return ResponseEntity.ok(proveedor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Para agregar proveedores
    @PostMapping
    public ResponseEntity<String> addProveedor(@RequestBody Proveedor proveedor) {
        ResponseEntity<String> response = proveedorService.addProveedor(proveedor);
        return response;
    }

    //Para actualizar un proveedor
    @PutMapping("/{id}")
    public ResponseEntity<Proveedor> updateProveedor(@PathVariable int id, @RequestBody Proveedor proveedor) {
        Proveedor proveedorActualizado = proveedorService.updateProveedor(id, proveedor);
        return ResponseEntity.ok(proveedorActualizado);
    }

    //Para eliminar un proveedor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProveedor(@PathVariable int id) {
        proveedorService.deleteProveedor(id);
        return ResponseEntity.noContent().build();
    }
}
