// Custom hook-like function to handle side effects
function useEffect(effect, dependencies) {
  let hasMounted = false;
  let prevDependencies = [];

  function runEffect() {
    if (!hasMounted || dependenciesChanged(dependencies, prevDependencies)) {
      effect();
      prevDependencies = dependencies;
    }
    hasMounted = true;
  }

  function dependenciesChanged(newDeps, oldDeps) {
    if (newDeps.length !== oldDeps.length) {
      return true;
    }
    for (let i = 0; i < newDeps.length; i++) {
      if (newDeps[i] !== oldDeps[i]) {
        return true;
      }
    }
    return false;
  }

  return runEffect;
}

// Component using useEffect
function createTimerComponent() {
  const element = document.createElement("div");
  let seconds = 0;

  function tick() {
    seconds++;
    element.innerText = "Seconds: " + seconds;
  }

  const runEffect = useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Simulate mounting and unmounting
  document.addEventListener("DOMContentLoaded", runEffect);
  window.addEventListener("unload", runEffect());

  return element;
}

// Usage
document.body.appendChild(createTimerComponent());
