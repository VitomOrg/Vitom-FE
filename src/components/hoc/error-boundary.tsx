import React from "react";

export class ErrorBoundary extends React.Component<{
  onError: (error: Error) => void;
  children: React.ReactNode;
}> {
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }

  render() {
    return this.props.children;
  }
}
