module.exports = {
  apps : [{
    name: "vue-fds_music",
    cwd: "./",
    script: 'vue-fds_music/app.js',
    watch: true,
    merge_logs: true,
    log_date_format: "YYYY-MM-DD HH:mm Z",
    instances: 1,
    min_uptime: "20000",
    max_restarts: 10,
    listen_timeout: "8000",
    max_memory_restart: "120M",
    exec_interpreter: "node",
    exec_mode: "fork",
    autorestart: true,
    vizion: false
  }, {
    name: "NeteaseCloudMusicApi-master",
    cwd: "./",
    script: 'NeteaseCloudMusicApi-master/app.js',
    watch: true,
    log_date_format: "YYYY-MM-DD HH:mm Z",
    instances: 1,
    min_uptime: "20000",
    max_restarts: 10,
    listen_timeout: "8000",
    max_memory_restart: "120M",
    exec_interpreter: "node",
    exec_mode: "fork",
    autorestart: true,
    vizion: false
  }],

  deploy : {
    production : {
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
