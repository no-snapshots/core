import fetch from 'node-fetch';
import { getConfigDetails } from '../../utils/get-config-details';
import { TestContentObject } from '../../types';
import { CreateNewInstanceResponse } from '../types';

const submitTestToServer = async (data: TestContentObject[]) => {
  const { server, project } = getConfigDetails();

  const body = {
    data,
  };

  try {
    const response = await fetch(`${server}/project/${project}/instance`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    }).then(response => response.json());

    return response as CreateNewInstanceResponse;
  } catch (e) {
    throw e;
  }
}

export { submitTestToServer };
