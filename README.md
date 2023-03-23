## Log Service Node Client


### createLog
Yeni bir log oluşturmak için kullanılır.

```
import logService from "log-service-node-client";

const createLogResponse = await logService.createLog({log: "test log", key: "test-key-slug"}, "oauth token");

/*
createLogResponse
{
  status: true,
  error: '',
  data: {}
}
*/
```


### getLogs

Bir keye ait logları getirmek için kullanılır.

```
import logService from "log-service-node-client";

const logsResponse = await logService.getLogs("test-key-slug", "oauth token") 

/*
logsResponse
{
  status: true,
  error: '',
  data: [
    {
      _id: '641cb5d7c8ce20c2cb3ef0ed',
      key: 'test-key-slug',
      log: 'test log',
      createdAt: '2023-03-23T20:25:59.457Z',
      updatedAt: '2023-03-23T20:25:59.457Z',
      __v: 0
    },
  ]
} 
*/
```