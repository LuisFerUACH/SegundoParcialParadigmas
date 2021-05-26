<template>
<header id="header">
  <div class="center">
    <!-- LOGO -->
    <div id="logo">
      <img src="../assets/images/logo.png" class="app-logo" alt="Logotipo" />
      <span id="brand">
        <strong>Segundo</strong> Parcial
      </span>
    </div>

    <!-- MENU -->
    <nav id="menu">
      <ul>
        <li>
          <a href="index.html">Inicio</a>
        </li>
        <li>
          <a href="blog.html">Listado</a>
        </li>
        <li>
          <a href="formulario.html">Añadir</a>
        </li>
        <li>
          <a href="#">Editar</a>
        </li>
        <li>
          <a href="#">Eliminar</a>
        </li>
      </ul>
    </nav>

    <!--LIMPIAR FLOTADOS-->
    <div class="clearfix"></div>
  </div>
</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
