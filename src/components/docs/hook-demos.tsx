"use client"

import {
  Button,
  Card,
  Input,
  useAnnouncer,
  useAsync,
  useClickOutside,
  useCopyToClipboard,
  useMouse,
  useResponsive,
  useScrollProgress,
  useTheme,
  useWindowSize,
} from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Check, Copy, Monitor, Moon, MousePointer2, Smartphone, Sun, Tablet } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "../../lib/utils"

// 1. useTheme Demo
export function UseThemeDemo() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        Current Theme: <span className="text-foreground font-bold">{theme}</span>
      </div>
      <div className="flex items-center gap-2 bg-muted p-1 rounded-full border">
        <Button
          variant={theme === "light" ? "default" : "ghost"}
          size="sm"
          onClick={() => setTheme("light")}
          className="rounded-full"
        >
          <Sun className="w-4 h-4 mr-2" /> Light
        </Button>
        <Button
          variant={theme === "dark" ? "default" : "ghost"}
          size="sm"
          onClick={() => setTheme("dark")}
          className="rounded-full"
        >
          <Moon className="w-4 h-4 mr-2" /> Dark
        </Button>
      </div>
    </div>
  )
}

// 2. useWindowSize Demo
export function UseWindowSizeDemo() {
  const { width, height } = useWindowSize()

  return (
    <div className="flex flex-col items-center justify-center p-8 border rounded-xl bg-muted/20 relative overflow-hidden group">
      <div className="absolute inset-0 bg-grid-white/[0.05] mask-[linear-gradient(0deg,transparent,black)]" />
      <div className="relative z-10 text-center space-y-2">
        <Monitor className="w-12 h-12 mx-auto text-primary mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
        <div className="text-4xl font-bold tracking-tighter">
          {width} <span className="text-muted-foreground text-2xl">x</span> {height}
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-widest">Window Dimensions</p>
      </div>
    </div>
  )
}

// 3. useCopyToClipboard Demo
export function UseCopyToClipboardDemo() {
  const [text, setText] = useState("Hello, Unicorn UI!")
  const [copied, copy] = useCopyToClipboard()

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <Button onClick={() => copy(text)} disabled={!text}>
        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  )
}

// 4. useAsync Demo
const fakeApiCall = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  if (Math.random() > 0.7) throw new Error("Random API failure simulation")
  return "Data successfully fetched from API"
}

export function UseAsyncDemo() {
  const { execute, data, loading, error } = useAsync(fakeApiCall)

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
      <Button
        onClick={() => execute()}
        disabled={loading}
        className="w-full"
        variant={error ? "destructive" : "default"}
      >
        {loading
          ? "Fetching Data..."
          : error
            ? "Try Again"
            : data
              ? "Refetch Data"
              : "Start Async Request"}
      </Button>

      <Card className="w-full p-4 h-24 flex items-center justify-center text-center bg-muted/50 border-dashed">
        {!loading && !data && !error && (
          <span className="text-muted-foreground">Ready to fetch</span>
        )}
        {loading && (
          <div className="flex items-center gap-2 text-primary">
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        )}
        {error && <span className="text-destructive font-medium">{error.message}</span>}
        {data && <span className="text-green-500 font-medium">{data}</span>}
      </Card>
    </div>
  )
}

// 5. useClickOutside Demo
export function UseClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false))

  return (
    <div className="flex flex-col items-center justify-center h-[200px]">
      <Button onClick={() => setIsOpen(true)} variant="outline">
        Open Modal
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            ref={ref}
          >
            <Card className="w-full max-w-md p-6 space-y-4 shadow-xl border-primary/20">
              <h3 className="text-xl font-bold">Click Outside Me</h3>
              <p className="text-muted-foreground">
                This modal will close if you click anywhere outside of this card box.
              </p>
              <Button className="w-full" variant="secondary" onClick={() => setIsOpen(false)}>
                Close (or click outside)
              </Button>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  )
}

// 6. useMouse Demo
export function UseMouseDemo() {
  const ref = useRef(null)
  const { x, y } = useMouse()

  return (
    <div
      ref={ref}
      className="relative w-full h-[300px] border rounded-xl overflow-hidden bg-muted/10 group cursor-crosshair flex items-center justify-center"
    >
      <div className="absolute inset-0 pointer-events-none grid place-items-center opacity-20">
        <MousePointer2 className="w-24 h-24" />
      </div>

      {/* <div className="text-center z-10 bg-background/80 backdrop-blur px-6 py-4 rounded-xl border shadow-sm">
                <p className="text-xs font-mono text-muted-foreground mb-1">MOUSE POSITION</p>
                <p className="text-2xl font-bold font-mono">
                    Move your cursor
                </p>
            </div> */}

      <motion.div
        className="absolute w-4 h-4 bg-primary rounded-full blur-sm pointer-events-none transition-out"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  )
}

// 7. useResponsive Demo
export function UseResponsiveDemo() {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <Card
        className={cn(
          "p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300",
          isMobile ? "bg-primary text-primary-foreground" : "opacity-30"
        )}
      >
        <Smartphone className="w-8 h-8" />
        <span className="font-bold">Mobile</span>
      </Card>

      <Card
        className={cn(
          "p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300",
          isTablet ? "bg-primary text-primary-foreground" : "opacity-30"
        )}
      >
        <Tablet className="w-8 h-8" />
        <span className="font-bold">Tablet</span>
      </Card>

      <Card
        className={cn(
          "p-4 flex flex-col items-center justify-center gap-2 transition-colors duration-300",
          isDesktop ? "bg-primary text-primary-foreground" : "opacity-30"
        )}
      >
        <Monitor className="w-8 h-8" />
        <span className="font-bold">Desktop</span>
      </Card>
    </div>
  )
}

// 8. useScrollProgress Demo
export function UseScrollProgressDemo() {
  const { scrollYProgress } = useScrollProgress()

  return (
    <div className="h-[200px] w-full overflow-y-scroll border rounded-xl relative p-4 bg-muted/10">
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded-full text-xs font-mono border z-10">
        Scroll Page to see Global Progress
      </div>

      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="p-4 rounded-lg bg-card border shadow-sm">
            <h4 className="font-bold mb-2">Section {i + 1}</h4>
            <p className="text-muted-foreground text-sm">
              Scroll down to keep moving the progress bar at the top of the viewport. This hook
              tracks the global window scroll progress.
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

// 9. useAnnouncer Demo
export function UseAnnouncerDemo() {
  const { announce, announcer } = useAnnouncer()
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    const newCount = count + 1
    setCount(newCount)
    announce(`Counter incremented to ${newCount}`, "polite")
  }

  const handleReset = () => {
    setCount(0)
    announce("Counter reset to zero", "assertive")
  }

  return (
    <div className="flex flex-col gap-4">
      {announcer}
      <div className="flex items-center gap-4">
        <Button onClick={handleIncrement} className="flex-1">
          Increment ({count})
        </Button>
        <Button onClick={handleReset} variant="outline" className="flex-1">
          Reset
        </Button>
      </div>
      <Card className="p-4 text-sm text-muted-foreground bg-muted/20">
        <p className="font-medium mb-2">Screen Reader Announcements:</p>
        <p>Click buttons to trigger accessibility announcements that will be read by screen readers.</p>
      </Card>
    </div>
  )
}
