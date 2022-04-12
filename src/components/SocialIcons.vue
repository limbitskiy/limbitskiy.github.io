<template>
  <ul class="social">
    <li>
      <a
        id="social-whatsapp"
        href="https://wa.me/79166335623"
        onclick="ym(87449113,'reachGoal','social-whatsapp')"
        ><i class="fab fa-whatsapp"></i
      ></a>
    </li>
    <li>
      <a
        id="social-telegram"
        href="https://telegram.me/masterZUZU"
        onclick="ym(87449113,'reachGoal','social-telegram')"
        ><i class="fab fa-telegram"></i
      ></a>
    </li>
    <li>
      <a
        id="social-youtube"
        href="https://www.youtube.com/channel/UCv8shipzYR9q7sFwmniAbRg"
        onclick="ym(87449113,'reachGoal','social-youtube')"
        ><i class="fab fa-youtube"></i
      ></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialIcons",
};
</script>

<style lang="scss" scoped>
.social {
  display: flex;
  gap: 0.8rem;
  font-size: 1.8rem;
}
</style>
