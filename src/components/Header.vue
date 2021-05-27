<template>
<header id="header">
  <div class="center">
    <!-- LOGO -->
    <div id="logo">
      <img src="../assets/images/logo.png" class="app-logo" alt="Logotipo" />
      <span id="brand">
        <strong>Segundo Parcial</strong> 
      </span>
    </div>

    <!-- MENU -->
    <nav id="menu">
      <ul>
        <li>
          <a href="home">Inicio</a>
        </li>
        <li>
          <a href="lista">Listado</a>
        </li>
        <li>
          <a href="agregar">Añadir</a>
        </li>
        <li>
          <a href="editar">Editar</a>
        </li>
        <li>
          <a href="eliminar">Eliminar</a>
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
