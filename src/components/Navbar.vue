<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-blue nav-s fixed-top shadow-sm py-3">
      <div class="container">
        <a class="navbar-brand" href="#">Ari Farhan</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item ps-3">
              <router-link to="/" class="nav-link text-white">Home</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/about" class="nav-link text-white">About</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/skill" class="nav-link text-white">Skill</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/achievement" class="nav-link text-white">Achievement</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/hire" class="nav-link text-white">Hire Me</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/project" class="nav-link text-white">Project</router-link>
            </li>
            <li class="nav-item ps-3">
              <router-link to="/contact" class="nav-link text-white">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  font-family: Poppins;
}
.bg-blue {
  background-color: #1963f3;
}
.navbar-toggler-icon {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAABUElEQVR4Xu1asRHCMAyUaZgAZiLUQMMCWQIKWCIL0AA1MBNMQIOBBSLdKbmz9Z9WVk7/+rcTnZOAPwkcv5AAKgCcAVoAXADcBGkBWgCcAVoAXAC2U6BZtdskeSGTNK2CsE9+Z0mP+7U7afWqFmg27S5lOWgvKjGek+zv5+7YV5tKwHLdPn8vmJUI0FDT63bp5iSghwFVAfAW+JMHvQkafFb1EtUCVaMzFE8CDCSFXkIFhG6vARwVYCAp9BIqIHR7DeBMCoD+FIb/GeI8AH0gAm8BzgMMR0nNS0zHYM0AtdpJgMZQ9DgVEL3DGj4qQGMoepwKiN5hDV8RChh83jDk/QCNQW98zJ+tQe4HeAFq+SPPG/z3AzQA3jg8AfAWGGXeUNMm6LWQN7+IY9ALwpNPAjzsRcilAiJ00YOBCvCwFyGXCojQRQ8GKsDDXoRceAV8AWe7hEGZuQMlAAAAAElFTkSuQmCC');
  font-size: 10;
  filter: invert(100%);
}
.navbar-toggler {
  border: none;
}
</style>
