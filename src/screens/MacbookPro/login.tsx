import { HelpCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

interface MacbookProProps {
  onLogin?: () => void;
}

export const MacbookPro = ({ onLogin }: MacbookProProps): JSX.Element => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const formPlaceholders = {
    username: "Masukkan nama pengguna...",
    password: "Masukkan kata sandi...",
  };

  const handleLogin = () => {
    // Simple validation - in real app, you'd validate against backend
    if (username.trim() && password.trim()) {
      onLogin?.();
    } else {
      alert("Mohon isi username dan password");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen w-full bg-[url(/bg-placeholder-2.png)] bg-cover bg-center bg-no-repeat flex items-center justify-end pr-[26px]">
      <div className="w-[425px] h-[701px]">
        <Card className="w-full h-full rounded-[42px] bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-0 relative">
          <CardContent className="p-0 flex flex-col items-center h-full">
            {/* Logo/Icon - Made circular */}
            <div className="mt-[68px] mb-[64px]">
              <div className="w-[171px] h-[171px] rounded-full overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
                <img
                  className="w-full h-full object-cover"
                  alt="Logo SiAP"
                  src="/logo_aplikasi.png"
                />
              </div>
            </div>

            {/* Username input */}
            <div className="w-[385px] mb-[19px]">
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-[76px] rounded-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 pl-6 text-[15px] text-gray-700 placeholder:text-gray-400 focus:shadow-[0_4px_12px_rgba(0,0,0,0.12)] focus:border-blue-300 transition-all duration-200"
                placeholder={formPlaceholders.username}
              />
            </div>

            {/* Password input */}
            <div className="w-[385px] mb-[11px]">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-[76px] rounded-[10px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 pl-6 text-[15px] text-gray-700 placeholder:text-gray-400 focus:shadow-[0_4px_12px_rgba(0,0,0,0.12)] focus:border-blue-300 transition-all duration-200"
                placeholder={formPlaceholders.password}
              />
            </div>

            {/* Remember me and Forgot password */}
            <div className="w-[385px] flex justify-between items-center mb-[30px]">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                  className="w-[18px] h-[18px] rounded-[4px] border-2 border-gray-300 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 data-[state=checked]:text-white shadow-sm"
                />
                <label
                  htmlFor="remember"
                  className="font-normal text-[13px] text-gray-700 cursor-pointer select-none"
                >
                  Ingat saya
                </label>
              </div>
              <button className="font-normal text-[13px] text-blue-500 hover:text-blue-600 transition-colors duration-200">
                Lupa password
              </button>
            </div>

            {/* Login button */}
            <Button 
              onClick={handleLogin}
              className="w-[376px] h-16 bg-[#2196f3] hover:bg-[#1976d2] rounded-[120px] shadow-[0_4px_16px_rgba(33,150,243,0.3)] hover:shadow-[0_6px_20px_rgba(33,150,243,0.4)] text-white text-3xl font-normal transition-all duration-200 transform hover:scale-[1.02]"
            >
              MASUK
            </Button>

            {/* Help button */}
            <div className="absolute bottom-[21px] right-[26px]">
              <Button
                size="icon"
                variant="outline"
                className="w-[35px] h-[35px] rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-200 p-0 hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:border-gray-300 transition-all duration-200"
              >
                <HelpCircleIcon className="w-5 h-5 text-gray-400" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};