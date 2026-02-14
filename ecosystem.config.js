module.exports = {
  apps: [
    {
      name: 'monitor-backend',
      script: 'npm',
      args: 'start',
      instances: 'max',
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '1G',
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 3000,
      kill_timeout: 5000,
      shutdown_with_message: true,
      wait_ready: true,
      exp_backoff_restart_delay: 100,
    },
  ],
}
