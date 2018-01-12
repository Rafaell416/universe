# Universe MQTT

## `agent/connected`

```js
{
  agent: {
    uuid, //autogenerar
    username, //definir por configuracion
    name, //definir por configuracion
    hostname, //obtener de SO
    pid //obtener del proceso
  }
}

```

## `agent/disconnected`

```js
{
  agent: {
    uuid
  }
}

```

## `agent/message`

```js
{
  agent,
  metrics: [
    {
      type,
      value
    }
  ],
  timestamp, //generar al crear el mensaje
}

```
