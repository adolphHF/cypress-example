"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de login exitoso
    if (email && password) {
      setIsLoggedIn(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoggedIn ? (
            <div className="space-y-4" data-testid="success-message">
              <p className="text-green-600">
                ¡Inicio de sesión exitoso! (Es un login dummy)
              </p>
              <Button onClick={handleLogout} data-testid="logout-button">
                Cerrar sesión
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-testid="email-input"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-testid="password-input"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                data-testid="login-button"
              >
                Iniciar sesión
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
