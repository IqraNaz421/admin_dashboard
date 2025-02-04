import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "kpy3htu1",
  dataset: "production",
  apiVersion: '2025-01-17',
  token:"skWC18HXekrtheCzsw9WvSsVVT7kysQGmVhkpwfZqDpKYCVjRew5KVN8JwKltmUKcQn2CixVYFDy1yJsSzJ7422iX0jYyV3dR442iwqnnHER3D8hpuYoNRfcatL6dYOHRA85cU47Hh3QJvrGVaTccGCZbJXIg3KHZGa9SMmtwqQXjQkelKq2",
  useCdn: true
});

export default client;