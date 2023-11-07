package taiga.backend.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;
import taiga.backend.server.config.JwtService;
import taiga.backend.server.controller.LoginRequest;
import taiga.backend.server.controller.RegisterRequest;
import taiga.backend.server.mapper.UserMapper;
import taiga.backend.server.model.Role;
import taiga.backend.server.model.Token;
import taiga.backend.server.model.User;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    @Autowired
    UserMapper userMapper;

    private final AuthenticationManager authenticationManager;

    private final PasswordEncoder passwordEncoder;

    private final JwtService jwtService;

    public Token authenticate(LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()));

            var user = userMapper.findByEmail(request.getEmail());
            var jwtToken = jwtService.generateToken(user);

            return Token.builder()
                    .token(jwtToken)
                    .build();

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public String register(RegisterRequest request) {
        var user = User
                .builder()
                .first_name(request.getFirstName())
                .last_name(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER)
                .build();

        userMapper.insert(user);

        return "Registered";
    }
}
