interface CustomHeaders extends Headers {
  [key: string]: any;
}

const headers: CustomHeaders = new Headers({
  'Content-Type': 'application/json',
});

let baseUrl = '';
/**
 * this function initializes baseUrl at time of initial branching i.e first access into this file
 */
(function initializeBaseUrl() {
  if (baseUrl) return;

  baseUrl = process.env.REACT_APP_API_BASE_URL ?? 'http://localhost:8080/';
})();

function composeHeaders() {
  const token = undefined;

  if (!headers.Authorization && token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  return function augmentHeaders(theirHeaders?: CustomHeaders) {
    return {
      ...headers,
      ...theirHeaders,
    };
  };
}

async function httpGetRequest(endpointSuffix: string) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: composedHeaders(),
  });

  return response;
}

async function httpPostRequest<PostType>(endpointSuffix: string, data: PostType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'POST',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

async function httpPutRequest<PutType>(endpointSuffix: string, data: PutType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'PUT',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

async function httpPatchRequest<PatchType>(endpointSuffix: string, data: PatchType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'PATCH',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

async function httpDeleteRequest(endpointSuffix: string) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'DELETE',
    headers: composedHeaders(),
  });

  return response;
}

async function httpLogOut() {
  const response = await {
    success: true,
  };

  return response;
}

export {
  httpGetRequest,
  httpPostRequest,
  httpPutRequest,
  httpPatchRequest,
  httpDeleteRequest,
  httpLogOut,
};
