# Examples

Here are practical examples showing how to use the light-dark preset in real-world scenarios.

## Dashboard Layout

A complete dashboard with adaptive colors:

```html
<div class="ld-bg-surface min-h-screen">
  <!-- Header -->
  <header class="ld-bg-primary ld-text-surface shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <h1 class="text-xl font-bold">Dashboard</h1>
        </div>
        <nav class="space-x-4">
          <a href="#" class="ld-text-surface hover:opacity-80">Home</a>
          <a href="#" class="ld-text-surface hover:opacity-80">Analytics</a>
          <a href="#" class="ld-text-surface hover:opacity-80">Settings</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="ld-bg-surface ld-border-secondary border rounded-lg p-6">
        <div class="flex items-center">
          <div class="ld-bg-success rounded-md p-3">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
            </svg>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="ld-text-secondary text-sm font-medium truncate">Total Revenue</dt>
              <dd class="ld-text-primary text-lg font-medium">$71,897</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="ld-bg-surface ld-border-secondary border rounded-lg p-6">
        <div class="flex items-center">
          <div class="ld-bg-warning rounded-md p-3">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
              ></path>
            </svg>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="ld-text-secondary text-sm font-medium truncate">New Users</dt>
              <dd class="ld-text-primary text-lg font-medium">405</dd>
            </dl>
          </div>
        </div>
      </div>

      <div class="ld-bg-surface ld-border-secondary border rounded-lg p-6">
        <div class="flex items-center">
          <div class="ld-bg-error rounded-md p-3">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              ></path>
            </svg>
          </div>
          <div class="ml-5 w-0 flex-1">
            <dl>
              <dt class="ld-text-secondary text-sm font-medium truncate">Bounce Rate</dt>
              <dd class="ld-text-primary text-lg font-medium">3.48%</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table -->
    <div class="ld-bg-surface ld-border-secondary border rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="ld-text-primary text-lg leading-6 font-medium mb-4">Recent Orders</h3>
        <div class="overflow-hidden">
          <table class="min-w-full divide-y ld-border-secondary">
            <thead>
              <tr>
                <th class="ld-text-secondary px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Order ID
                </th>
                <th class="ld-text-secondary px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Customer
                </th>
                <th class="ld-text-secondary px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Status
                </th>
                <th class="ld-text-secondary px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody class="divide-y ld-border-secondary">
              <tr>
                <td class="ld-text-primary px-6 py-4 whitespace-nowrap text-sm font-medium">#1234</td>
                <td class="ld-text-secondary px-6 py-4 whitespace-nowrap text-sm">John Doe</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="ld-bg-success ld-text-surface px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  >
                    Completed
                  </span>
                </td>
                <td class="ld-text-primary px-6 py-4 whitespace-nowrap text-sm">$89.99</td>
              </tr>
              <tr>
                <td class="ld-text-primary px-6 py-4 whitespace-nowrap text-sm font-medium">#1235</td>
                <td class="ld-text-secondary px-6 py-4 whitespace-nowrap text-sm">Jane Smith</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="ld-bg-warning ld-text-surface px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                  >
                    Processing
                  </span>
                </td>
                <td class="ld-text-primary px-6 py-4 whitespace-nowrap text-sm">$156.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</div>
```

## Form Components

Adaptive form styling:

```html
<div class="ld-bg-surface min-h-screen p-8">
  <div class="max-w-md mx-auto">
    <form class="ld-bg-surface ld-border-secondary border rounded-lg p-6 shadow-lg">
      <h2 class="ld-text-primary text-2xl font-bold mb-6">Sign In</h2>

      <div class="mb-4">
        <label class="ld-text-secondary block text-sm font-medium mb-2"> Email Address </label>
        <input
          type="email"
          class="ld-bg-surface ld-text-primary ld-border-secondary border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div class="mb-6">
        <label class="ld-text-secondary block text-sm font-medium mb-2"> Password </label>
        <input
          type="password"
          class="ld-bg-surface ld-text-primary ld-border-secondary border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        class="ld-bg-primary ld-text-surface w-full py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>

      <div class="mt-4 text-center">
        <a href="#" class="ld-text-accent text-sm hover:underline"> Forgot your password? </a>
      </div>
    </form>
  </div>
</div>
```

## Card Components

Various card layouts with adaptive theming:

```html
<div class="ld-bg-surface min-h-screen p-8">
  <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Blog Post Card -->
    <article class="ld-bg-surface ld-border-secondary border rounded-lg overflow-hidden shadow-lg">
      <img src="/api/placeholder/400/200" alt="Blog post image" class="w-full h-48 object-cover" />
      <div class="p-6">
        <div class="flex items-center mb-2">
          <span class="ld-bg-accent ld-text-surface px-2 py-1 rounded text-xs font-medium"> Technology </span>
          <span class="ld-text-secondary text-sm ml-auto"> Mar 16, 2024 </span>
        </div>
        <h3 class="ld-text-primary text-xl font-semibold mb-2">Building Better UIs with Modern CSS</h3>
        <p class="ld-text-secondary text-sm mb-4">
          Explore the latest CSS features that can help you create more maintainable and accessible user interfaces.
        </p>
        <a href="#" class="ld-text-accent hover:underline text-sm font-medium"> Read more → </a>
      </div>
    </article>

    <!-- Product Card -->
    <div class="ld-bg-surface ld-border-secondary border rounded-lg overflow-hidden shadow-lg">
      <div class="relative">
        <img src="/api/placeholder/400/300" alt="Product image" class="w-full h-48 object-cover" />
        <div class="absolute top-2 right-2">
          <span class="ld-bg-error ld-text-surface px-2 py-1 rounded text-xs font-bold"> Sale </span>
        </div>
      </div>
      <div class="p-6">
        <h3 class="ld-text-primary text-lg font-semibold mb-2">Wireless Headphones</h3>
        <p class="ld-text-secondary text-sm mb-4">Premium sound quality with active noise cancellation</p>
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <span class="ld-text-primary text-xl font-bold">$199</span>
            <span class="ld-text-secondary text-sm line-through">$299</span>
          </div>
          <button class="ld-bg-primary ld-text-surface px-4 py-2 rounded hover:opacity-90">Add to Cart</button>
        </div>
      </div>
    </div>

    <!-- User Profile Card -->
    <div class="ld-bg-surface ld-border-secondary border rounded-lg p-6 shadow-lg">
      <div class="flex items-center mb-4">
        <img src="/api/placeholder/80/80" alt="User avatar" class="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 class="ld-text-primary text-lg font-semibold">Sarah Johnson</h3>
          <p class="ld-text-secondary text-sm">Senior Developer</p>
        </div>
      </div>
      <p class="ld-text-secondary text-sm mb-4">
        Passionate about creating user-friendly applications and mentoring junior developers.
      </p>
      <div class="flex space-x-3">
        <button class="ld-bg-primary ld-text-surface px-3 py-1 rounded text-sm hover:opacity-90">Follow</button>
        <button class="ld-border-primary ld-text-primary border px-3 py-1 rounded text-sm hover:opacity-90">
          Message
        </button>
      </div>
    </div>
  </div>
</div>
```

## Navigation Components

Adaptive navigation with proper contrast:

```html
<!-- Sidebar Navigation -->
<div class="flex h-screen ld-bg-surface">
  <!-- Sidebar -->
  <nav class="ld-bg-secondary w-64 p-4">
    <div class="mb-8">
      <h1 class="ld-text-surface text-xl font-bold">My App</h1>
    </div>

    <ul class="space-y-2">
      <li>
        <a href="#" class="ld-text-surface hover:ld-bg-primary flex items-center px-4 py-2 rounded-lg">
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
            ></path>
          </svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="ld-text-surface hover:ld-bg-primary flex items-center px-4 py-2 rounded-lg">
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Tasks
        </a>
      </li>
      <li>
        <a href="#" class="ld-text-surface hover:ld-bg-primary flex items-center px-4 py-2 rounded-lg">
          <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
            ></path>
          </svg>
          Analytics
        </a>
      </li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main class="flex-1 p-8">
    <h2 class="ld-text-primary text-2xl font-bold mb-6">Welcome Back!</h2>
    <div class="ld-bg-surface ld-border-secondary border rounded-lg p-6">
      <p class="ld-text-secondary">
        Your main content goes here. The sidebar and content areas automatically adapt to your theme preference.
      </p>
    </div>
  </main>
</div>
```

## Modal and Overlay

Theme-aware modal components:

```html
<!-- Modal Overlay -->
<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
  <div class="ld-bg-surface ld-border-secondary border rounded-lg max-w-md w-full p-6 shadow-xl">
    <!-- Modal Header -->
    <div class="flex items-center justify-between mb-4">
      <h3 class="ld-text-primary text-lg font-semibold">Confirm Action</h3>
      <button class="ld-text-secondary hover:ld-text-primary">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <!-- Modal Content -->
    <p class="ld-text-secondary mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>

    <!-- Modal Actions -->
    <div class="flex space-x-3 justify-end">
      <button class="ld-border-secondary ld-text-secondary border px-4 py-2 rounded hover:opacity-90">Cancel</button>
      <button class="ld-bg-error ld-text-surface px-4 py-2 rounded hover:opacity-90">Delete</button>
    </div>
  </div>
</div>
```

## Configuration for Examples

To use these examples, configure your preset with appropriate colors:

```ts
presetLightDark({
  colors: {
    primary: { light: '#3b82f6', dark: '#60a5fa' },
    secondary: { light: '#6b7280', dark: '#374151' },
    accent: { light: '#f59e0b', dark: '#fbbf24' },
    surface: { light: '#ffffff', dark: '#1f2937' },
    success: { light: '#10b981', dark: '#34d399' },
    warning: { light: '#f59e0b', dark: '#fbbf24' },
    error: { light: '#ef4444', dark: '#f87171' },
    textPrimary: { light: '#111827', dark: '#f9fafb' },
    textSecondary: { light: '#6b7280', dark: '#d1d5db' },
  },
})
```

## Best Practices

1. **Consistent Naming**: Use semantic color names that describe their purpose rather than their appearance
2. **Contrast Testing**: Ensure sufficient contrast ratios for accessibility
3. **Fallback Strategy**: Test your design with the preset disabled to ensure basic usability
4. **Performance**: The `light-dark()` function is highly optimized and performs better than JavaScript-based theme switching

## What's Next?

- [Basic Usage →](/unocss-preset-light-dark/usage/basic) - Learn the fundamentals
- [Configuration →](/unocss-preset-light-dark/configuration) - Customize your setup
- [Playground →](https://unocss.dev/play/) - Try these examples online
