<script>

    import { url, isActive } from "@sveltech/routify";
    let show = false;
    const links = [
        ["./index", "Home"],
        ["./about", "About"],
        ["./contact", "Contact"],
        ["./career", "Career"],
    ];
    function handleBurger() {
    show = !show;
  }
</script>

<aside>
    <nav class="mobile-nav">
      <span class="burger" on:click={handleBurger}>☰</span>
      <span class="title">BlockReview</span>
      <span />
    </nav>
    <nav class:show on:click={() => (show = false)}>
      {#each links as [path, name]}
        <a class="link" class:active={$isActive(path)} href={$url(path)}>
          {name}
        </a>
      {/each}
    </nav>
  </aside>

<style>
    a:hover {
        text-decoration: none;
        color: rgb(3, 160, 134);
        
    }
  aside {
    text-align: center;
  }
  nav {
    background: white;
  }

  .link {
    display: block;
    white-space: nowrap;
  }
  .active {
    font-weight: bold;
    color: rgb(3, 160, 134);
  }
  .mobile-nav {
    font-size: 18px;
    background: white;
    padding: 8px;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
    display: block;
  }
  .mobile-nav * {
    vertical-align: middle;
  }
  .title {
    
    top: 6px;
    left: 0;
    right: 0;
    text-align: center;
  }

  .burger {
    font-size: 24px;
    position: absolute;
    left: 8px;
    top: 4px;
  }
  nav {    
    display: none;
    width: 100%;
    padding: 16px;
    z-index: 1;
  }

  @media (min-width: 640px) {
    nav {
      margin: 16px;
      border-radius: 4px;
      box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.075);
      display: inline-block;
      position: relative;
      width: auto;
    }
    .link {
      padding: 0 16px;
      min-width: 56px;
      display: inline-block;
    }

    .mobile-nav {
      display: none;
    }

  }

  nav.show {
    display: block;
  }
</style>

