interface CustomHeaders extends Headers {
  [key: string]: any;
}

const headers: CustomHeaders = new Headers({
  'Content-Type': 'application/json',
});

let baseUrl = '';
/**
 * @param  {} functioninitializeBaseUrl(
 * @param  {} {if(baseUrl
 * @param  {}} return;baseUrl=process.env.REACT_APP_API_BASE_URL??'http
 *
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

/**
 * @param  {string} endpointSuffix
 * @returns {Promise<ServerResponse>} => server response
 */
async function httpGetRequest(endpointSuffix: string) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: composedHeaders(),
  });

  return response;
}

/**
 * @param  {string} endpointSuffix => post-endpoint
 * @param  {PutType} data
 * @returns {Promise<ServerResponse>} => server response
 */
async function httpPostRequest<PostType>(endpointSuffix: string, data: PostType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'POST',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

/**
 * @param  {string} endpointSuffix => put-endpoint
 * @param  {PutType} data
 * @returns {Promise<ServerResponse>} => server response
 */
async function httpPutRequest<PutType>(endpointSuffix: string, data: PutType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'PUT',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

/**
 * @param  {string} endpointSuffix => patch-endpoint
 * @param  {PatchType} data
 * @returns {Promise<ServerResponse>} => server response
 */
async function httpPatchRequest<PatchType>(endpointSuffix: string, data: PatchType) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'PATCH',
    headers: composedHeaders(),
    body: data as unknown as BodyInit,
  });

  return response;
}

/**
 * @param {string} endpointSuffix => delete-endpoint/fieldOrRowId
 * @returns {Promise<ServerResponse>}
 */
async function httpDeleteRequest(endpointSuffix: string) {
  const composedHeaders = composeHeaders();

  const response = await fetch(`${baseUrl}${endpointSuffix}`, {
    method: 'DELETE',
    headers: composedHeaders(),
  });

  return response;
}

export { httpGetRequest, httpPostRequest, httpPutRequest, httpPatchRequest, httpDeleteRequest };
