# GitHub OAuth

<script lang="ts" setup>
// 获取请求参数
const params = new URLSearchParams(window.location.search);
const code = params.get('code');
</script>

授权码:

{{ code }}
