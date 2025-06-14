"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VideoGenerationStudio } from "@/components/video-generation-studio"
import { CharacterConsole } from "@/components/character-console"
import { EditingSuite } from "@/components/editing-suite"
import { BatchProcessor } from "@/components/batch-processor"
import { AIChat } from "@/components/ai-chat"
import { ProjectManager } from "@/components/project-manager"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { Play, Video, Users, Edit, Layers, MessageSquare, FolderOpen, BarChart3 } from "lucide-react"

export default function RevolutionaryAIStudio() {
  const [activeTab, setActiveTab] = useState("generation")

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Revolutionary AI Video Studio</h1>
              <p className="text-blue-200">All-in-One AI-Powered Video Creation Platform</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5 text-blue-400" />
                  <div>
                    <p className="text-sm text-blue-200">Videos Generated</p>
                    <p className="text-2xl font-bold text-white">1,247</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-400" />
                  <div>
                    <p className="text-sm text-blue-200">Characters Created</p>
                    <p className="text-2xl font-bold text-white">89</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-blue-200">Projects Active</p>
                    <p className="text-2xl font-bold text-white">23</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-yellow-400" />
                  <div>
                    <p className="text-sm text-blue-200">Success Rate</p>
                    <p className="text-2xl font-bold text-white">95.7%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Interface */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-7 bg-white/10 border-white/20">
            <TabsTrigger value="generation" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Generation
            </TabsTrigger>
            <TabsTrigger value="characters" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Characters
            </TabsTrigger>
            <TabsTrigger value="editing" className="flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Editing
            </TabsTrigger>
            <TabsTrigger value="batch" className="flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Batch
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              AI Chat
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="generation">
            <VideoGenerationStudio />
          </TabsContent>

          <TabsContent value="characters">
            <CharacterConsole />
          </TabsContent>

          <TabsContent value="editing">
            <EditingSuite />
          </TabsContent>

          <TabsContent value="batch">
            <BatchProcessor />
          </TabsContent>

          <TabsContent value="chat">
            <AIChat />
          </TabsContent>

          <TabsContent value="projects">
            <ProjectManager />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
