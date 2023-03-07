package fr.sparkit.spring.security.jwt.services;

import fr.sparkit.spring.security.jwt.models.*;
import fr.sparkit.spring.security.jwt.repository.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;
import org.springframework.util.*;
import org.springframework.web.multipart.*;

import java.io.*;

@Service
public class ImageStorageService {
    @Autowired
    private PhotoRepository photoRepository;

    public Photo store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Photo photo = new Photo(fileName, file.getContentType(), file.getBytes());
        return photoRepository.save(photo);
    }

    public Photo getPhoto(long id) {
        return photoRepository.findById(id).get();
    }
}
