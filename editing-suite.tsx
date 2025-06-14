"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Edit,
  Scissors,
  Volume2,
  Palette,
  Type,
  Layers,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Download,
  Zap,
  Sparkles,
  Music,
} from "lucide-react"

export function EditingSuite() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState([30])
  const [volume, setVolume] = useState([75])

  const effects = [
    { name: "Cinematic", icon: Sparkles, color: "bg-purple-500" },
    { name: "Vintage", icon: Palette, color: "bg-yellow-500" },
    { name: "Modern", icon: Zap, color: "bg-blue-500" },
    { name: "Dramatic", icon: Layers, color: "bg-red-500" },
  ]

  const transitions = ["Fade", "Cut", "Dissolve", "Wipe", "Slide", "Zoom"]

  return (
    <div className="space-y-6">
      {/* Video Preview */}
      <Card className="bg-white/10 border-white/20">
        <CardContent className="p-6">
          <div className="aspect-video bg-black rounded-lg mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-400">Video preview</p>
              </div>
            </div>
            {/* Timeline overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-4">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <div className="flex-1">
                  <Slider value={currentTime} onValueChange={setCurrentTime} max={120} step={1} className="w-full" />
                </div>
                <span className="text-white text-sm font-mono">
                  {Math.floor(currentTime[0] / 60)}:{(currentTime[0] % 60).toString().padStart(2, "0")} / 2:00
                </span>
              </div>
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <SkipBack className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                <SkipForward className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-white" />
                <div className="w-20">
                  <Slider value={volume} onValueChange={setVolume} max={100} step={1} />
                </div>
              </div>
              <Button size="sm" className="bg-gradient-to-r from-purple-500 to-blue-500">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editing Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline */}
        <div className="lg:col-span-2">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Timeline Editor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="video" className="space-y-4">
                <TabsList className="grid w-full grid-cols-4 bg-white/10">
                  <TabsTrigger value="video">Video</TabsTrigger>
                  <TabsTrigger value="audio">Audio</TabsTrigger>
                  <TabsTrigger value="text">Text</TabsTrigger>
                  <TabsTrigger value="effects">Effects</TabsTrigger>
                </TabsList>

                <TabsContent value="video" className="space-y-4">
                  <div className="h-32 bg-white/5 rounded-lg border border-white/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-blue-500 rounded" />
                      <span className="text-sm text-white">Video Track 1</span>
                    </div>
                    <div className="h-8 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded relative">
                      <div className="absolute inset-0 flex items-center px-2">
                        <span className="text-xs text-white">Main Video Sequence</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/20 text-white">
                      <Scissors className="w-4 h-4 mr-1" />
                      Cut
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-white">
                      <Layers className="w-4 h-4 mr-1" />
                      Split
                    </Button>
                    <Select>
                      <SelectTrigger className="w-32 bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Transition" />
                      </SelectTrigger>
                      <SelectContent>
                        {transitions.map((transition) => (
                          <SelectItem key={transition} value={transition.toLowerCase()}>
                            {transition}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="audio" className="space-y-4">
                  <div className="space-y-3">
                    <div className="h-16 bg-white/5 rounded-lg border border-white/10 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-green-500 rounded" />
                        <span className="text-sm text-white">Voice Track</span>
                      </div>
                      <div className="h-6 bg-gradient-to-r from-green-500/50 to-teal-500/50 rounded" />
                    </div>
                    <div className="h-16 bg-white/5 rounded-lg border border-white/10 p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded" />
                        <span className="text-sm text-white">Background Music</span>
                      </div>
                      <div className="h-6 bg-gradient-to-r from-yellow-500/50 to-orange-500/50 rounded" />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-white/20 text-white">
                      <Music className="w-4 h-4 mr-1" />
                      Add Music
                    </Button>
                    <Button size="sm" variant="outline" className="border-white/20 text-white">
                      <Volume2 className="w-4 h-4 mr-1" />
                      Adjust Volume
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="text" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 border-white/20 text-white flex-col">
                      <Type className="w-6 h-6 mb-1" />
                      Add Title
                    </Button>
                    <Button variant="outline" className="h-20 border-white/20 text-white flex-col">
                      <Type className="w-6 h-6 mb-1" />
                      Add Subtitle
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-200">Font Style</label>
                    <Select>
                      <SelectTrigger className="bg-white/5 border-white/20 text-white">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern Sans</SelectItem>
                        <SelectItem value="classic">Classic Serif</SelectItem>
                        <SelectItem value="bold">Bold Impact</SelectItem>
                        <SelectItem value="elegant">Elegant Script</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>

                <TabsContent value="effects" className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {effects.map((effect, index) => {
                      const Icon = effect.icon
                      return (
                        <Button
                          key={index}
                          variant="outline"
                          className="h-16 border-white/20 text-white flex-col hover:bg-white/10"
                        >
                          <Icon className="w-6 h-6 mb-1" />
                          {effect.name}
                        </Button>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Tools Panel */}
        <div className="space-y-6">
          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Quick Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Auto-Cut
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                <Palette className="w-4 h-4 mr-2" />
                Color Grade
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                <Volume2 className="w-4 h-4 mr-2" />
                Audio Enhance
              </Button>
              <Button variant="outline" className="w-full justify-start border-white/20 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                AI Enhance
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Brightness</label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Contrast</label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Saturation</label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Export Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Quality</label>
                <Select defaultValue="4k">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1080p">1080p HD</SelectItem>
                    <SelectItem value="4k">4K Ultra HD</SelectItem>
                    <SelectItem value="8k">8K Cinema</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-blue-200 mb-2 block">Format</label>
                <Select defaultValue="mp4">
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4</SelectItem>
                    <SelectItem value="mov">MOV</SelectItem>
                    <SelectItem value="avi">AVI</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
