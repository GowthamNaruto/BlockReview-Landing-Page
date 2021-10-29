<script>
    import { route } from "@sveltech/routify";
    console. log("route", $route);
</script>


<div class="e404">
    <div class="huge">404</div>
    <div class="big">Page not found.
        <p>We're sorry, the page you requested could not be found <br> Please go back to homepage.</p> 
    <!-- link to the parent folder of _fallback.svelte -->
    </div>
  </div>
  <style>
    .huge {
      font-size: 12rem;
    }
    .e404 {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }
  </style>