package com.example.aidsystem.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKey = "mySecretKey"; // Используйте безопасный ключ в реальном приложении
    private long validityInMilliseconds = 3600000; // 1 час

    public String createToken(Authentication authentication) {
        return Jwts.builder()
                .setSubject(authentication.getName()) // Устанавливаем имя пользователя
                .setIssuedAt(new Date()) // Время выдачи
                .setExpiration(new Date(System.currentTimeMillis() + validityInMilliseconds)) // Время истечения
                .signWith(SignatureAlgorithm.HS256, secretKey) // Подпись
                .compact();
    }

    public String getSecretKey() {
        return secretKey;
    }

    public void setSecretKey(String secretKey) {
        this.secretKey = secretKey;
    }

    public long getValidityInMilliseconds() {
        return validityInMilliseconds;
    }

    public void setValidityInMilliseconds(long validityInMilliseconds) {
        this.validityInMilliseconds = validityInMilliseconds;
    }
}
