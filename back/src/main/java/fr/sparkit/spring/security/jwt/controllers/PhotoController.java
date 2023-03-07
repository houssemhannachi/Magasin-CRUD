package fr.sparkit.spring.security.jwt.controllers;


import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.payload.*;
import fr.sparkit.spring.security.jwt.services.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;
import org.springframework.web.servlet.support.*;

@Controller
@CrossOrigin("http://localhost:4200")
public class PhotoController {
    @Autowired
    private ImageStorageService imageStorageService;

    @PostMapping("/api/auth/uploadPhoto")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file) {
        String message = "";
        try {
            Photo photo = imageStorageService.store(file);
            message = "Téléchargé avec succès: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new UploadFileResponse(photo.getId(), message));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            message = "Erreur de téléchargement: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new UploadFileResponse(null, message));
        }
    }

    @GetMapping("/api/auth/images/{id}")
    public ResponseEntity<ResponseFile> getFile(@PathVariable long id) {
        Photo photo = imageStorageService.getPhoto(id);
        String fileDownloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/api/auth/images/download/")
                .path(photo.getId().toString())
                .toUriString();
        ResponseFile file = new ResponseFile(
                photo.getId(),
                photo.getName(),
                fileDownloadUri,
                photo.getType(),
                photo.getData().length);
        return ResponseEntity.status(HttpStatus.OK).body(file);
    }

    @GetMapping("/api/auth/images/download/{id}")
    public ResponseEntity<byte[]> downloadImage(@PathVariable long id) {
        Photo photo = imageStorageService.getPhoto(id);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + photo.getName() + "\"")
                .body(photo.getData());
    }
}
