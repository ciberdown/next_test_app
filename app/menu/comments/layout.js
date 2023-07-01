'use client'

import { QueryClient, QueryClientProvider } from "react-query";

function PostsLayout({ children }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div>{children}</div>
    </QueryClientProvider>
  );
}

export default PostsLayout;
