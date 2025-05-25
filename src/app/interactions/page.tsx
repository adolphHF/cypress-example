"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function InteractionsPage() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [doubleClick, setDoubleClick] = useState(false);
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold">Interacciones y Eventos</h1>

      {/* Counter */}
      <Card data-testid="contador">
        <CardHeader>
          <CardTitle>Contador</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p data-testid="contador-valor">Valor actual: {count}</p>
          <Button
            onClick={() => setCount(count + 1)}
            data-testid="boton-incrementar"
          >
            Incrementar
          </Button>
        </CardContent>
      </Card>

      {/* Show/Hide text */}
      <Card data-testid="mostrar-texto">
        <CardHeader>
          <CardTitle>Mostrar / Ocultar</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            onClick={() => setShowText(!showText)}
            data-testid="boton-toggle-texto"
          >
            {showText ? "Ocultar" : "Mostrar"} texto
          </Button>
          {showText && (
            <p data-testid="texto-visible">Este texto es visible 🎉</p>
          )}
        </CardContent>
      </Card>

      {/* Task */}
      <Card data-testid="tarea">
        <CardHeader>
          <CardTitle>Tarea</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className={taskDone ? "line-through text-muted-foreground" : ""}>
            📝 Estudiar Cypress
          </p>
          <Button
            onClick={() => setTaskDone(!taskDone)}
            data-testid="boton-completar-tarea"
          >
            {taskDone ? "Marcar como pendiente" : "Marcar como completada"}
          </Button>
        </CardContent>
      </Card>

      {/* Controlled input */}
      <Card data-testid="input-controlado">
        <CardHeader>
          <CardTitle>Campo de texto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Input
            placeholder="Escribe algo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            data-testid="input-texto"
          />
          <p data-testid="texto-escrito">Escribiste: {inputValue}</p>
        </CardContent>
      </Card>

      {/* Double click */}
      <Card data-testid="doble-click">
        <CardHeader>
          <CardTitle>Doble clic</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            onDoubleClick={() => setDoubleClick(true)}
            data-testid="boton-doble-click"
          >
            Haz doble clic aquí
          </Button>
          {doubleClick && (
            <p data-testid="doble-click-confirmado">¡Doble clic detectado!</p>
          )}
        </CardContent>
      </Card>

      {/* Switch */}
      <Card data-testid="switch">
        <CardHeader>
          <CardTitle>Interruptor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 flex items-center gap-4">
          <Label htmlFor="modo">Modo oscuro</Label>
          <Switch
            id="modo"
            checked={switchOn}
            onCheckedChange={setSwitchOn}
            data-testid="switch-modo"
          />
          <span data-testid="estado-switch">
            {switchOn ? "Activado" : "Desactivado"}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
