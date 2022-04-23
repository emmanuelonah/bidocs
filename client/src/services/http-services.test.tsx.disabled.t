import axios from 'axios';

import { httpGetRequest, httpDeleteRequest, httpSendRequest } from './http-services';

jest.mock('axios');

describe('httpServices', () => {
  const response = {
    ok: true,
  };

  beforeEach(() => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.get.mockResolvedValueOnce(response);
  });
  it('should confirm GET request works', async () => {
    const _response = await httpGetRequest({ endpointSuffix: 'fake_resources' });
    expect(_response).toEqual(response);
  });

  it('should confirm POST request works', async () => {
    const _response = await httpSendRequest<{ name: string }>({
      endpointSuffix: 'fake_resources',
      method: 'POST',
      data: { name: 'Emmanuel Onah' },
    });
    expect(_response).toEqual(response);
  });

  it('should confirm PUT request works', async () => {
    const _response = await httpSendRequest<{ name: string }>({
      endpointSuffix: 'fake_resources/1',
      method: 'PUT',
      data: { name: 'Emmanuel Onah' },
    });
    expect(_response).toEqual(response);
  });

  it('should confirm PATCH request works', async () => {
    const _response = await httpSendRequest<{ name: string }>({
      endpointSuffix: 'fake_resources/1',
      method: 'PATCH',
      data: { name: 'Emmanuel Onah' },
    });
    expect(_response).toEqual(response);
  });

  it('should confirm DELETE request works', async () => {
    const _response = await httpDeleteRequest({
      endpointSuffix: 'fake_resources/1',
    });
    expect(_response).toEqual(response);
  });
});
