import React, { useState, useEffect } from 'react';
import { Box, Typography, Collapse, Button, Paper, Chip } from '@mui/material';
import { apiDebugger } from '@app/utils/apiDebugger';

const ApiDebugPanel: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [calls, setCalls] = useState(apiDebugger.getCalls());

  useEffect(() => {
    const interval = setInterval(() => {
      setCalls(apiDebugger.getCalls());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 9999,
        maxWidth: 400,
      }}
    >
      <Button
        variant="contained"
        size="small"
        onClick={() => setOpen(!open)}
        sx={{ mb: 1 }}
      >
        API Calls ({calls.length}) {open ? '▼' : '▲'}
      </Button>
      
      <Collapse in={open}>
        <Paper sx={{ p: 2, maxHeight: 400, overflow: 'auto' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="h6">API Debug Panel</Typography>
            <Button size="small" onClick={() => {
              apiDebugger.clearCalls();
              setCalls([]);
            }}>
              Clear
            </Button>
          </Box>
          
          {calls.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              No API calls yet
            </Typography>
          ) : (
            calls.map((call) => (
              <Paper
                key={call.id}
                variant="outlined"
                sx={{ p: 1, mb: 1, fontSize: '0.8rem' }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <Typography variant="subtitle2">{call.method}</Typography>
                  <Chip
                    label={call.status}
                    size="small"
                    color={
                      call.status === 'success' 
                        ? 'success' 
                        : call.status === 'error' 
                        ? 'error' 
                        : 'default'
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    {new Date(call.timestamp).toLocaleTimeString()}
                  </Typography>
                </Box>
                
                <details>
                  <summary style={{ cursor: 'pointer', marginBottom: '4px' }}>
                    <Typography variant="caption">Request Data</Typography>
                  </summary>
                  <pre style={{ 
                    fontSize: '10px', 
                    background: '#f5f5f5', 
                    padding: '4px', 
                    borderRadius: '4px',
                    overflow: 'auto',
                    maxHeight: '100px'
                  }}>
                    {JSON.stringify(call.data, null, 2)}
                  </pre>
                </details>
                
                {call.response && (
                  <details>
                    <summary style={{ cursor: 'pointer', marginBottom: '4px' }}>
                      <Typography variant="caption" color="success.main">Response</Typography>
                    </summary>
                    <pre style={{ 
                      fontSize: '10px', 
                      background: '#e8f5e8', 
                      padding: '4px', 
                      borderRadius: '4px',
                      overflow: 'auto',
                      maxHeight: '100px'
                    }}>
                      {JSON.stringify(call.response, null, 2)}
                    </pre>
                  </details>
                )}
                
                {call.error && (
                  <details>
                    <summary style={{ cursor: 'pointer', marginBottom: '4px' }}>
                      <Typography variant="caption" color="error.main">Error</Typography>
                    </summary>
                    <pre style={{ 
                      fontSize: '10px', 
                      background: '#ffeaea', 
                      padding: '4px', 
                      borderRadius: '4px',
                      overflow: 'auto',
                      maxHeight: '100px'
                    }}>
                      {JSON.stringify(call.error, null, 2)}
                    </pre>
                  </details>
                )}
              </Paper>
            ))
          )}
        </Paper>
      </Collapse>
    </Box>
  );
};

export default ApiDebugPanel;
