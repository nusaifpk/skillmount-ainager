import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClaudeResponse {
  message: string;
  usage?: {
    input_tokens: number;
    output_tokens: number;
  };
}

export async function sendMessageToClaude(
  message: string,
  conversationHistory: ChatMessage[] = []
): Promise<ClaudeResponse> {
  try {
    const { data, error } = await supabase.functions.invoke('chat', {
      body: {
        message,
        conversationHistory,
      },
    });

    if (error) {
      console.error('Edge function error:', error);
      throw new Error(error.message || 'Failed to communicate with Claude');
    }

    if (!data || !data.message) {
      throw new Error('Invalid response from Claude');
    }

    return data as ClaudeResponse;
  } catch (error) {
    console.error('Error calling Claude API:', error);
    throw error;
  }
}
